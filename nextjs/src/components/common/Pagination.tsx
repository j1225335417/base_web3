import React, { useEffect, useState } from 'react';

// import zhCN from 'antd/es/locale/zh_CN';
const DynamicPagination: React.FC<any> = ({ total, onChange }) => {
  const [Pagination, setPagination] = useState<React.ComponentType<any> | null>(
    null
  );

  const [ConfigProviderComponent, setConfigProviderComponent] =
    useState<React.ComponentType<any> | null>(null);
  const [locale, setLocale] = useState<any>(null);

  useEffect(() => {
    const loadPagination = async () => {
      const { Pagination, ConfigProvider } = await import('antd'); // 动态导入 Pagination
      const zhCN = await import('antd/es/locale/zh_CN');
      setPagination(() => Pagination);
      setConfigProviderComponent(() => ConfigProvider);
      setLocale(() => zhCN.default);
    };

    loadPagination();
  }, []);

  if (!Pagination || !ConfigProviderComponent || !locale) {
    // 动态加载过程中显示占位内容
    return <div>加载中...</div>;
  }
  console.log('ConfigProviderComponent', ConfigProviderComponent);
  // 加载成功后使用 Pagination 组件
  return (
    <ConfigProviderComponent
      locale={locale}
      theme={{
        token: {
          colorPrimary: 'red', // 蓝色主色
        },
      }}
    >
      <Pagination
        defaultCurrent={1}
        total={total}
        size={window.innerWidth < 768 ? 'small' : 'default'}
        onChange={(e: any) => {
          onChange(e);
        }}
        itemRender={(page: any, type: any, originalElement: any) => {
          if (type === 'prev') {
            return (
              <button>
                <img src="/product/page_prev.svg" className="w-15 h-15" />
              </button>
            );
          }
          if (type === 'next') {
            return (
              <button>
                <img src="/product/page_next.svg" className="w-15 h-15" />
              </button>
            );
          }
          if (type === 'jump-prev' || type === 'jump-next') {
            console.log('originalElement', originalElement);
            return originalElement;
          }
          return originalElement;
        }}
      />
    </ConfigProviderComponent>
  );
};

export default DynamicPagination;
