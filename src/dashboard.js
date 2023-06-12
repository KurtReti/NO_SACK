import DashboardItem from './components/DashboardItem';
import './dashboard.css';

const Dashboard = () => {

    return (
        <div className='container'>
            <DashboardItem name="Loot Generator"/>
            <DashboardItem name="Manage Schedule"/>
            <DashboardItem name="Search for an item"/>
            <DashboardItem name="Combat Generator"/>
            
        </div>
    );
};

export default Dashboard;
