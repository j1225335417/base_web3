// pages/index.tsx
import { useEffect, useState } from 'react';
const Home: React.FC<{
  themeChange?: (theme: string | null) => void;
}> = ({ themeChange }) => {
  const [theme, setTheme] = useState<string | null>(null);
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

  // // 切换主题
  // const toggleTheme = () => {
  //   const newTheme = theme === 'dark' ? 'light' : 'dark';
  //   document.documentElement.classList.remove(theme || '');
  //   document.documentElement.classList.add(newTheme);
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme); // 保存到 localStorage
  // };

  return (
    <div>
      <div className="text-center">
        {/* <button onClick={toggleTheme} className="btn btn-primary">
          {theme === 'light' ? t('theme.dark') : t('theme.light')}
        </button> */}
      </div>
    </div>
  );
};

export default Home;
