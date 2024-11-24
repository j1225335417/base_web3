import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC<{
  themeChange?: (theme: string | null) => void;
  isIndexHeader: boolean;
}> = ({ themeChange, isIndexHeader }) => {
  const [theme, setTheme] = useState<string | null>(null);
  const { t } = useTranslation();

  // 初始化时检查 localStorage 中的主题设置
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setTheme(savedTheme);
    } else {
      // 如果没有保存的主题，检查系统的主题偏好
      const userPreferredTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light';
      setTheme(userPreferredTheme);
      localStorage.setItem('theme', userPreferredTheme);
      document.documentElement.classList.add(userPreferredTheme);
    }

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      document.documentElement.classList.remove(theme || '');
      document.documentElement.classList.add(newTheme);
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };
    mediaQuery.addEventListener('change', handleChange);
    themeChange?.(theme);

    // 清理事件监听器
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(theme || '');
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // 保存到 localStorage
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1 transition-all duration-300 ease-in-out hover:scale-110 border-solid border-[1px] border-btnbg dark:border-white rounded-full"
    >
      {isIndexHeader}
      {theme === 'light' ? (
        // 白天模式的太阳图标
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-8 h-8 ${
            !isIndexHeader ? 'text-white' : 'text-btnbg '
          }transform transition duration-500 ease-in-out`}
        >
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2m-14 0H3m5.293-5.293l1.414 1.414m8.486 8.486l1.414 1.414m-1.414-8.486l-1.414 1.414m-8.486 8.486l-1.414 1.414"
          />
        </svg>
      ) : (
        // 夜间模式的月亮图标
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8 text-white transform transition duration-500 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1112.21 3c.51 0 1.01.04 1.51.12A7.501 7.501 0 0021 12.79z"
          />
        </svg>
      )}
    </button>
  );
};

export default Home;
