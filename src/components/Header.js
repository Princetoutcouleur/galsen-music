import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features", path: "#" },
    { title: "Integrations", path: "#" },
    { title: "Customers", path: "#" },
    { title: "Pricing", path: "#" }
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn") && !target.closest(".navbar-toggler")) setState(false);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.floatui.com/logo.svg"
            width={120}
            height={50}
            alt="Float UI logo"
          />
        </a>
        <button
          className="navbar-toggler menu-btn"
          type="button"
          aria-expanded={state}
          onClick={() => setState(!state)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${state ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            {navigation.map((item, idx) => (
              <li key={idx} className="nav-item">
                <a href={item.path} className="nav-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
