'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('@chakra-ui/react');
var ModalCloseButton = require('./ModalCloseButton.js');

const ModalWrapper = ({ children, isOpen, onClose }) => {
    return (jsxRuntime.jsxs(react.Modal, { isOpen: isOpen, onClose: onClose, id: "rsi", variant: "rsi", closeOnEsc: false, closeOnOverlayClick: false, scrollBehavior: "inside", children: [jsxRuntime.jsx(react.ModalOverlay, {}), jsxRuntime.jsx(ModalCloseButton.ModalCloseButton, { onClose: onClose }), jsxRuntime.jsx(react.ModalContent, { children: children })] }));
};

exports.ModalWrapper = ModalWrapper;
