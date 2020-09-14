import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Sauce', type: 'sauce'},
    {label: 'Potato', type: 'potato'},
    {label: 'Cheese', type: 'cheese'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) =>  (
            <BuildControl 
                key = {ctrl.label} 
                label = {ctrl.label} 
                added = {() => props.ingredientAdded(ctrl.type)}
                removed = {() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}/>
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;