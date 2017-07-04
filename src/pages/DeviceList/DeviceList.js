import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeviceListItem from '../../components/DeviceListItem/DeviceListItem';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import Search from '../../components/Search/Search';
import { options } from '../../data/constants';
import { filterAction } from '../../actions/filterAction';
import { ChangeStatus } from '../../actions/actionsCreator';
import { searchItem, fetchDevices } from '../../utils/utils';
import { filterItems } from '../../selectors';
require('./DeviceList.scss');

class DeviceList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleFilterSelect = (filterOption) => {
      this.props.filterAction(filterOption);
    };
    this.handleSearchResult = (searchValue) => {
      this.setState({ searchValue });
    };
    this.changeStatus = (index) => {
      this.props.changeStatus(index);
      // ChangeStatus(index);
    };
  }

  componentDidMount () {
    let data;
    if (this.props.items === []) {
      fetchDevices().then((response) => {
        console.log(response);
        data = response;
      }, (error) => {
        console.log(error);
      });
    }
  }

  render () {
    console.log(this.props.devices);
    const searchValue = this.state.searchValue;
    const filterOption = this.state.filterOption;
    const match = this.props.match;

    if (this.props.devices.length === 0) {
      return (
        <main>
          <h1>Oops... there's nothing here.
            It looks like you need to add a device first.</h1>
          <div>Add Device</div>
        </main>
      );
    }

    return (
      <main>
        <h1>Yours devices</h1>
        <FilterSelect
          handleSelect={this.handleFilterSelect}
          options={options}
        />
        <Search
          handleSearch={this.handleSearchResult}
        />
        <Link to={'#'} className="add-item-button">+</Link>
        <section>
          {this.props.devices.filter(item => searchItem(item, searchValue)
          ).map((item, i) => {
            return (
              <DeviceListItem data={item} key={i} index={i} 
                match={match} changeStatus={this.changeStatus} />
            );
          })
          }
        </section>
      </main>
    );
  }
}

const mapStateToProps = state =>({
  devices: filterItems(state),
  filter: state.filterOption
  // Сделать поиск через стейт
});

const mapDispatchToProps = (dispatch) => ({
  filterAction: (filterOption) => dispatch(filterAction(filterOption)),
  changeStatus: (index) => dispatch(ChangeStatus(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
