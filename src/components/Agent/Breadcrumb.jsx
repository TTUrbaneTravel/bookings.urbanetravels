import { Link } from "react-router-dom";

const Breadcrumb = ({ pageName, breadcrumbs }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-baseColor dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              <Link to={crumb.link} className="text-gray600 hover:text-primary1">
                {crumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
            </li>
          ))}
          <li className="text-primary1">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
