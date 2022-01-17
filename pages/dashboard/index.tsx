import Admin from "@/components/Admin";
import DashboardPanel from "@/components/Dashboard/DashboardPanel";
import useUserStore from "@/store/user";

const Dashboard = () => {
  const user = useUserStore();
  return (
    <Admin>
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        欢迎回来，{user.info.username}
      </h1>

      <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
        <DashboardPanel
          value={100}
          icon="icon-park-outline:transaction-order"
          desc="订单数量"
        ></DashboardPanel>
      </div>
      <div className="space-y-4">
        <div className="w-full shadow stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">310M</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc text-success">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc text-error">↘︎ 90 (14%)</div>
          </div>
        </div>
        <div className="border stats border-base-300">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-primary">Withdrawal</button>
              <button className="btn btn-sm btn-primary">deposit</button>
            </div>
          </div>
        </div>
        <div className="w-full border stats border-base-300">
          <div className="stat">
            <div className="stat-figure text-primary">
              <button className="btn loading btn-circle btn-lg bg-base-200 btn-ghost"></button>
            </div>
            <div className="stat-value">4,900/7,300</div>
            <div className="stat-title">Files transfered</div>
            <div className="stat-desc">
              <progress
                value="60"
                max="100"
                className="progress progress-secondary"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Dashboard;
