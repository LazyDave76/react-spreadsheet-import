import { jsxs, jsx } from 'react/jsx-runtime';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { ModalCloseButton } from './ModalCloseButton.js';

const ModalWrapper = ({ children, isOpen, onClose }) => {
    return (jsxs(Modal, { isOpen: isOpen, onClose: onClose, id: "rsi", variant: "rsi", closeOnEsc: false, closeOnOverlayClick: false, scrollBehavior: "inside", children: [jsx(ModalOverlay, {}), jsx(ModalCloseButton, { onClose: onClose }), jsx(ModalContent, { children: children })] }));
};

export { ModalWrapper };
