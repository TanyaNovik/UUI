import React from 'react';
import { BaseDocsBlock, DocExample, EditableDocContent, UUI3, UUI4 } from "../common";

export class DropdownContainerDoc extends BaseDocsBlock {
    title = 'Dropdown Container';

    getPropsDocPath() {
        return {
            [UUI3]: './loveship/components/overlays/docs/dropdownContainer.doc.tsx',
            [UUI4]: './epam-promo/components/overlays/docs/dropdownContainer.doc.tsx',
        };
    }

    renderContent() {
        return (
            <>
                <EditableDocContent fileName='dropdownContainer-descriptions' />
                { this.renderSectionTitle('Examples') }
                <DocExample title='Basic' path='./examples/dropdownContainer/Basic.example.tsx'/>
            </>

        );
    }
}

