import React from 'react';
import './index.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

class App extends React.Component {
    state = {
        items: [],
        isModalOpen: false,
    }

    addTask = (e) => {
        e.preventDefault();
        
        const newItem = {
            name: e.target[0].value,
            description: e.target[1].value,
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));

        e.target.reset();
        this.closeModal();
    }

    openModal = () => {
        this.setState({
                isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { isModalOpen } = this.state;

        return (
            <div>
                <Header openModalFn={this.openModal} />
                { isModalOpen && <Modal closeModalFn={this.closeModal} submitFn={this.addTask}></Modal> }
                <ListWrapper 
                    items={this.state.items}
                />
            </div>
        )
    }
}

export default App;