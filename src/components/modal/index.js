import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalClose } from "../../redux/reducers/modalReducer";
import Gallery from '../imgGallery';
const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  maxHeight: '80vh',
  boxShadow: 24,
  bgcolor: 'black',
  border: 'none',
  outline: "none",
};

const BasicModal = ()=> {
    const dispatch = useDispatch();
    const {isOpen} = useSelector((state) => state.modal);
    const handleClose = () =>{
        dispatch(modalClose())
    }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Gallery/>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;