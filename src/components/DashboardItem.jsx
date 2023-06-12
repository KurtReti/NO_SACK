import '../styles/DashboardItem.css'

const DashboardItem = (props) => {


    return(
        <div className='dashboard-card'>
          {props.name}
        </div>
    );
}

export default DashboardItem;