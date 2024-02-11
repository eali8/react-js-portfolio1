import React from 'react';

const ConfirmationModal = ({data, handleDelete}) => {

    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure You Want to Delete?</h3>
                    <p className="py-4">You wont be able to get back once deleted the item.</p>
                    <div className="modal-action">
                        <label onClick={() => handleDelete(data._id)} htmlFor="confirmation-modal" className="btn btn-secondary">Confirm</label>
                        <label htmlFor="confirmation-modal" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;