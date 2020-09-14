import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey+i} type={igKey}/>
            });
        })
        .reduce((prevArr, currEl) => {
            return prevArr.concat(currEl);
        }, []);
    
    if (ingredients.length === 0){
        ingredients = <p>Please start adding ingredients!</p>
    }

    return (    
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;