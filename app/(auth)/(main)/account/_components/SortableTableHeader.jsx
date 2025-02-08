'use client';

import React from 'react';

const SortableTableHeader = ({ onClick, children, className }) => {
    return (
        <th onClick={onClick} className={className}>
            {children}
        </th>
    );
};

export default SortableTableHeader;