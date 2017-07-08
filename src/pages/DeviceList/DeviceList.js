import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeviceListItem from '../../components/DeviceListItem/DeviceListItem';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import Search from '../../components/Search/Search';
import { options } from '../../data/filterOptions';
import { filterAction,
  searchAction } from '../../actions/searchAndFilter.action';
import { changeStatus } from '../../actions/changeStatus.action';
import { searchItem, fetchDevices } from '../../utils/utils';
import { filterItems } from '../../selectors';
import { loadDevices } from '../../actions/loadDevices.action';
import PropTypes from 'prop-types';
require('./DeviceList.scss');

class DeviceList extends React.Component {
  constructor (props) {
    super(props);

    this.props.loadDevices();

    this.handleFilterSelect = (filterOption) => {
      this.props.filterAction(filterOption);
    };
    this.handleSearchResult = (searchValue) => {
      this.props.findItems(searchValue);
    };
    this.changeStatus = (index) => {
      this.props.changeStatus(index);
    };
  }

  render () {
    const searchValue = this.props.search;
    const filterOption = this.props.filterOption;

    return (
      <main className='device-list'>
        <header className='device-list__header'>
          <FilterSelect
            handleSelect={this.handleFilterSelect}
            options={options}
          />
          <Search
            handleSearch={this.handleSearchResult}
          />
          <Link to={'/builder'} className="btn add-item-button">+</Link>
        </header>
        <section className='device-list__content'>
          { this.props.devices.length === 0 ? <p>Nothing here</p> :
            this.props.devices.filter(item => searchItem(item, searchValue)
            ).map((item, i) => {
              return (
                <DeviceListItem data={item} key={i}
                  changeStatus={this.changeStatus}/>
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
  filter: state.searchAndFilter,
  search: state.searchAndFilter.searchValue
});

const mapDispatchToProps = (dispatch) => ({
  filterAction: (filterOption) => dispatch(filterAction(filterOption)),
  changeStatus: (index) => dispatch(changeStatus(index)),
  findItems: (searchValue) => dispatch(searchAction(searchValue)),
  loadDevices: () => dispatch(loadDevices())
});

DeviceList.propTypes = {
  search: PropTypes.string,
  filterOption:  PropTypes.object,
  match: PropTypes.object,
  changeStatus: PropTypes.func,
  devices: PropTypes.array,
  filterAction: PropTypes.func,
  findItems: PropTypes.func,
  loadDevices: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
