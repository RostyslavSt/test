import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeviceListItem from '../../components/DeviceListItem/DeviceListItem';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import Search from '../../components/Search/Search';
import { options } from '../../data/constants';
import { filterAction } from '../../actions/filterAction';
import { ChangeStatus } from '../../actions/actionsCreator';
import { searchAction } from '../../actions/searchAction';
import { searchItem, fetchDevices } from '../../utils/utils';
import { filterItems } from '../../selectors';
import PropTypes from 'prop-types';
require('./DeviceList.scss');

class DeviceList extends React.Component {
  constructor (props) {
    super(props);

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
                  changeStatus={this.props.changeStatus}/>
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
  filter: state.filterReducer,
  search: state.searchReducer
});

const mapDispatchToProps = (dispatch) => ({
  filterAction: (filterOption) => dispatch(filterAction(filterOption)),
  changeStatus: (index) => dispatch(ChangeStatus(index)),
  findItems: (searchValue) => dispatch(searchAction(searchValue))
});

DeviceList.propTypes = {
  search: PropTypes.bool,
  filterOption:  PropTypes.object,
  match: PropTypes.object,
  changeStatus: PropTypes.bool,
  devices: PropTypes.array,
  filterAction: PropTypes.func,
  findItems: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
