import React from 'react';
import { Component } from './Modal.styles';
import { Button } from '../Button/Button';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <Component.Overlay onClick={onClose}>
            <Component.Content onClick={(e) => e.stopPropagation()}>
                <Component.Header>{title}</Component.Header>
                <Component.Body>{children}</Component.Body>
                <Component.Footer>
                    <Button onClick={onClose}>Close</Button>
                </Component.Footer>
            </Component.Content>
        </Component.Overlay>
    );
};
