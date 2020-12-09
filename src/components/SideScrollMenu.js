import React from 'react';
import { Link } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './Menu.css'

const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
];

const selected = 'item1';

const MenuItem = ({text, selected}) => {
    return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

list.map(el => {
    const {name} = el;
    
    return <MenuItem text={name} key={name} selected={selected} />;
});

export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });



class SideScrollMenu extends React.Component {

    constructor(props) {
        super(props);
        this.menuItems = Menu(list, selected);
    }


    state = {
        selected
    };



    onSelect = key => {
        this.setState({ selected: key });
        console.log("Selected item! ", key);
    }

    renderMenu = () => {

        const menu = this.menuItems;

        console.log('invoked menu!');
       
        return (
            <div className="App">
                <h3>Select an item</h3>
                <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={this.onSelect}
                />
            </div>
        )
    }

    renderButton = () => {
        return (
            <div>
                <Link to={`/selection/${this.state.selected}`} className="ui button primary">Confirm selection</Link>
            </div>
        )
    }

    render()
    {
        return (
            <div>
                {this.renderMenu()}
                {this.renderButton()}
            </div>
        )
    }
}


export default SideScrollMenu;