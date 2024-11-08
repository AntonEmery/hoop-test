import { useState } from "react";

import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Modal from "./components/Modal";
import SettingsModal from "./components/SettingsModal";

import './App.css'

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <MainContainer>
      <Header />

      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Open Account Modal
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <SettingsModal />
        </Modal>
      )}

    </MainContainer>
  )
}

export default App
