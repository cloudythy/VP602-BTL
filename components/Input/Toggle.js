import React, { useCallback, useState } from 'react';
import { TextInput, Text, StyleSheet, View, Switch } from 'react-native';
import { COLOR } from '../../constants';

const Toggle = (props) => {
    const { user, onSwitch } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const switchHandler = useCallback(() => {
        onSwitch();
        setIsEnabled((previousState) => !previousState);
    }, [onSwitch, setIsEnabled]);
    return (
        <View>
            <Switch
                trackColor={{
                    false: COLOR.common.grey,
                    true:
                        user === 'admin'
                            ? COLOR.admin.primary
                            : COLOR.user.primary,
                }}
                thumbColor={isEnabled ? COLOR.common.light : COLOR.common.light}
                ios_backgroundColor='#3e3e3e'
                onValueChange={switchHandler}
                value={isEnabled}
            />
        </View>
    );
};
export default Toggle;
