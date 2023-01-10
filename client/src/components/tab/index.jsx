import * as React from 'react';
import { useTab, useMultiStyleConfig, Button, Box } from '@chakra-ui/react';

const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    // alert(props.isActive)
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']
    // alert(props.isActive)
    tabProps['aria-selected'] = props.isActive || false
    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
        <Button __css={styles.tab} {...tabProps}>
            {tabProps.children}
        </Button>
    )
})

export default CustomTab