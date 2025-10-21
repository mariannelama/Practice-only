import React, { useState, useCallback } from 'react';

// --- Reusable Modal Component to replace alert() ---
const MessageModal = ({ title, message, onConfirm }) => {
    if (!message) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 mb-6">{message}</p>
                <button
                    onClick={onConfirm}
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-150"
                >
                    OK
                </button>
            </div>
        </div>
    );
};