import React from 'react';

const Updates = () => {
  const updates = [
    {
      title: 'React 18 Released!',
      description: 'React 18 introduces significant improvements including concurrent rendering, Suspense for Data Fetching, and React Server Components. With the Concurrent Rendering feature, React can work on multiple tasks at once, improving performance. The automatic batching of updates and the new root API offer better handling of updates for more interactive applications.',
      date: 'December 14, 2024',
    },
    {
      title: 'JavaScript ES2024 Features Announced',
      description: 'ES2024 brings several new features to JavaScript including async iteration improvements, better handling of native modules, and enhanced pattern matching capabilities. Notably, it introduces the `async` iterators on built-in objects, as well as new utility functions for handling more complex data structures, making JavaScript more powerful and efficient.',
      date: 'December 10, 2024',
    },
    {
      title: 'Tailwind CSS 3.0 Released',
      description: 'Tailwind CSS 3.0 is a major release bringing new utility classes, a more streamlined development process, and improved build performance. The version introduces features like JIT (Just-In-Time) mode by default, enhanced support for custom configurations, and the ability to purify CSS even further, resulting in smaller, faster websites.',
      date: 'December 8, 2024',
    },
    {
      title: 'Node.js 18 LTS Now Available',
      description: 'Node.js 18 enters Long Term Support (LTS) with improved stability, security patches, and updates to the V8 JavaScript engine. The release includes support for new ECMAScript features and better memory management, alongside improvements to the native HTTP/2 module. Node.js 18 is the ideal choice for production-grade applications with long-term stability.',
      date: 'December 5, 2024',
    },
    {
      title: 'TypeScript 5.0 Released',
      description: 'TypeScript 5.0 brings improvements to type inference, a new JSX transform, and expanded support for type-checking, making the language even more robust and developer-friendly. It includes more powerful type aliases, custom transformers, and improved type narrowing, allowing developers to write safer, more expressive code. Additionally, JSX updates make React integration even smoother.',
      date: 'December 3, 2024',
    },
    {
      title: 'Docker 25.0 Released with Improved Build System',
      description: 'Docker 25.0 is now available with significant updates to the build system. It introduces multi-stage builds to optimize container images, enhanced security features, and a more efficient way to manage Dockerfiles. Docker 25.0 simplifies containerization, making it even easier to build, ship, and run applications across different environments.',
      date: 'December 1, 2024',
    },
    {
      title: 'Kubernetes 1.27 Now Available',
      description: 'Kubernetes 1.27 introduces new features such as enhanced network policy controls, improved scalability with vertical pod autoscaling, and better support for Windows nodes. The update also focuses on making Kubernetes more secure, with improved role-based access control (RBAC) and audit logging, making it a critical release for production environments.',
      date: 'November 28, 2024',
    },
    {
      title: 'Next.js 14 Released with Improved Static Site Generation',
      description: 'Next.js 14 improves Static Site Generation (SSG) with new incremental static regeneration (ISR) features, allowing developers to update static pages in real-time without rebuilding the entire site. The update also brings better support for large-scale applications and enhanced image optimization, improving performance for Next.js apps.',
      date: 'November 25, 2024',
    },
    {
      title: 'Vite 4.0 Released with Faster Build Time and Improved Plugin Ecosystem',
      description: 'Vite 4.0 has been released with major improvements including faster build times thanks to optimized dependency pre-bundling, and better plugin integration with enhanced TypeScript support. Vite remains one of the fastest front-end development tools available, making it an ideal choice for developers looking for high-performance builds.',
      date: 'November 22, 2024',
    },
    {
      title: 'GraphQL 2024 Introduces New Subscriptions Features',
      description: 'GraphQL 2024 adds significant improvements to subscriptions, enabling real-time updates and more complex queries. This update aims to make GraphQL more flexible and scalable, with support for better data synchronization between the client and server. The improved subscriptions API makes it easier for developers to implement real-time functionality in their apps.',
      date: 'November 19, 2024',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Latest Tech Updates</h2>
      <div className="list-group">
        {updates.map((update, index) => (
          <div key={index} className="list-group-item list-group-item-action mb-3 shadow-sm rounded">
            <div>
              <h3>{update.title}</h3>
              <p>{update.description}</p>
              <small>{update.date}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
