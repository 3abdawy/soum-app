import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Typography from '@shared/Components/Typography';
import CustomButton from '@shared/Components/Buttons/CustomButton';
import Colors from '@shared/Theme/Colors';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import SVGIcon from '@shared/Components/SVGIcon';
import {IStopCardHeaderProps} from './types';
import useTripsStore from 'Store/Products/useTripsStore';

const StopCardHeader = ({stop, type}: IStopCardHeaderProps) => {
  const {t} = UseTranslationHook();
  const {stopAction} = useTripsStore();
  const receivalCard = t('ORDERS_SCREEN.RECEIVALS') === type;
  const bgColor = receivalCard
    ? Colors.System.Warning.Light
    : Colors.System.Warning.Blue;
  const svgIcon = receivalCard ? 'gradientBorder' : 'blueGradientBorder';

  const iconConfig = {
    iconName: 'success',
    iconColor: Colors.Base.Primary.Light,
    iconSize: 16,
  };
  const {name, action} = stop;
  const isConfirmArrivalBtn =
    action &&
    t(`ORDERS_SCREEN.${action.key}`) === t('ORDERS_SCREEN.CONFIRM_ARRIVAL');

  const renderActionButton = () => {
    return (
      action && (
        <CustomButton
          data={{
            text: t(`ORDERS_SCREEN.${action.key}`),
            testID: 'loading_confirmReceiving_btn',
          }}
          config={{
            ...(isConfirmArrivalBtn && {isWithIcon: iconConfig}),
            customButtonStyle: {
              backgroundColor: isConfirmArrivalBtn
                ? Colors.System.Success.Normal
                : Colors.Brand.Primary.Normal,
              height: 40,
              paddingVertical: 8,
              paddingHorizontal: 10,
            },
            customTextStyle: {
              color: Colors.Base.Primary.Light,
              fontWeight: 'bold',
            },
          }}
          eventHandlers={{
            onPress: () => {
              stopAction(action.key, stop.stopId);
            },
          }}
        />
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={{...styles.headerNote, backgroundColor: bgColor}}>
        <Typography
          style={styles.cardHeaderText}
          variant="body"
          fontWeight="bold"
          testID={
            receivalCard
              ? 'listing_sourceLocationName_value'
              : 'listing_deliveryDestinationName_value'
          }>
          {name}
        </Typography>
        {renderActionButton()}
      </View>
      <SVGIcon
        data={{
          iconName: svgIcon,
          iconColor: Colors.System.Success.Normal,
        }}
      />
    </View>
  );
};
export default StopCardHeader;
