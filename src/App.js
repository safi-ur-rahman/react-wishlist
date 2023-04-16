import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';


const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState(1);

  const updatePriority = (index, priority) => {
    const newItems = [...items];
    newItems[index].priority = priority;
    setItems(newItems);
  };


  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const moveItemToTop = (index) => {
    const newItems = [...items];
    const item = newItems.splice(index, 1);
    newItems.unshift(item[0]);
    setItems(newItems);
  };

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { name: inputValue, priority: priority }]);
      setInputValue('');
      setPriority(1);
    }
  };

  return (
    <div>
      
      <div className='top'>
        <h1>Wishlist</h1>
      </div>
      <div className='product-entry'>
        <p>Product Name </p>
        <div>
          <FormControl className='formControl'
            placeholder="Product Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>

      <div className='priority-entry'>
        <p>Select Priority </p>
        <div className='priority-entry-flex' onChange={(e) => setPriority(parseInt(e.target.value))}>
          <input type="radio" name="priority" value="1" id='1' checked={priority === 1} />
          <label for='1'>High</label>
          <input type="radio" name="priority" value="2" id='2' checked={priority === 2} />
          <label for='2'>Medium</label>
          <input type="radio" name="priority" value="3" id='3' checked={priority === 3} />
          <label for='3'>Low</label>
        </div>
      </div>

      <div className='add-button'>
        <Button onClick={addItem}>
            <p>Add</p>
        </Button>
      </div>

      <div className='line'></div>
      <h2 className='sub-heading'>Added Products</h2>

      <div className='grid-view'>
        {items.map((item, index) => (
            <div className='product'>
              <div className='product-flex'>
                <div className='product-info'>
                  <img className='product-img' src={require('./Images/box.jpg')}  alt="product"/>
                  <h2>{item.name}</h2>
                </div>
                <div className='product-action'>
                  <Button onClick={() => moveItemToTop(index)}>
                    Move to Top
                  </Button>
                  <Button onClick={() => removeItem(index)}>
                    Remove
                  </Button>{' '}
                </div>
              </div>
              <div className='priority-flex'>
                <p>Priority </p>

                <div className='priority-entry-flex'>
                  <div>
                    <input
                      type="radio"
                      name={`priority-${index}`}
                      id={`priority-1-${index}`}
                      value={1}
                      checked={item.priority === 1}
                      onChange={(e) => updatePriority(index, parseInt(e.target.value))}
                    />
                    <label htmlFor={`priority-1-${index}`}>
                      High
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name={`priority-${index}`}
                      id={`priority-2-${index}`}
                      value={2}
                      checked={item.priority === 2}
                      onChange={(e) => updatePriority(index, parseInt(e.target.value))}
                    />
                    <label htmlFor={`priority-2-${index}`}>
                      Medium
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name={`priority-${index}`}
                      id={`priority-3-${index}`}
                      value={3}
                      checked={item.priority === 3}
                      onChange={(e) => updatePriority(index, parseInt(e.target.value))}
                    />
                    <label htmlFor={`priority-3-${index}`}>
                      Low
                    </label>
                  </div>
                </div>

              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;