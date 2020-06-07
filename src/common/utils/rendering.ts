export const renderWhen = (
    condition: any,
    elementToRender: JSX.Element
): JSX.Element | null => (condition ? elementToRender : null);
