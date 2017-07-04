import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeviceListItem from '../../components/DeviceListItem/DeviceListItem';
import FilterSelect from '../../components/FilterSelect/FilterSelect';
import Search from '../../components/Search/Search';
import { options } from '../../data/constants';
import { searchItem, filterItems } from '../../utils/utils';
import {ChangeStatus} from '../../actions/actionsCreator';
require('./DeviceList.scss');

class DeviceList extends React.Component {
  constructor (props) {
    super(props);

    this.devices = [];

    this.state = {
      filterOption: 'all',
      searchValue: ''
    };
    this.handleFilterSelect = (filterOption) => {
      this.setState({ filterOption });
    };
    this.handleSearchResult = (searchValue) => {
      this.setState({ searchValue });
    };
    this.changeStatus = (index) => {
      this.props.dispatch(ChangeStatus(index));
    };
  }

  render () {
    const searchValue = this.state.searchValue;
    const filterOption = this.state.filterOption;
    const match = this.props.match;

    if (this.props.items.length === 0) {
      return (
        <main>
          <h1>Oops... there's nothing here.
            It looks like you need to add a device first.</h1>
          <div>Add Device</div>
        </main>
      );
    }
    
    this.devices = [];

    this.props.items.map((item, index)=>{
      if (filterItems(item, filterOption) && searchItem(item, searchValue)) {
        this.devices.push(<DeviceListItem data={item} 
                      key={index} match={match} index={index} 
                        changeStatus={this.changeStatus}/>);
      }
    });

    return (
      <main>
        <h1>Yours devices</h1>
      <div className="controls">
        <FilterSelect
          handleSelect={this.handleFilterSelect}
          options={options}
        />
        <Search
          handleSearch={this.handleSearchResult}
        />
      
        <Link to={'#'} className="add-item-button">+</Link>
      </div>
        <section>
          {this.devices.map((d, i) => {
            return d;
          })}
        </section>
      </main>
    );
  }
}

const mapStateToProps = state =>({
  items: state
});
export default connect(mapStateToProps)(DeviceList);
