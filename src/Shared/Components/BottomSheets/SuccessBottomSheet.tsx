import React from 'react';
import SVGIcon from '../SVGIcon';
import VerticalSpace from '../VerticalSpace';
import Typography from '../Typography';
import Colors from '@shared/Theme/Colors';
import CustomButton from '../Buttons/CustomButton';
import styles from './styles';
import useTripsStore from 'Store/Products/useTripsStore';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';

interface IUnAssignSheetProps {
  info: {actionKey: string; orderNumber: string};
}

const SuccessBottomSheet = ({info}: IUnAssignSheetProps) => {
  const {t} = UseTranslationHook();
  const {handleSuccessModalButton} = useTripsStore();
  const {actionKey, orderNumber} = info;

  return (
    <>
      <SVGIcon data={{iconName: 'orderCompleted', iconSize: 60}} />
      <VerticalSpace height={8} />
      <Typography variant="body" style={styles.modalText}>
        {actionKey === 'FINISH_LOADING' ? (
          <>
            {t('SUCCESS_SHEET.TITLE_LOADING')}{' '}
            <Typography fontWeight="bold">{orderNumber}</Typography>{' '}
            {t('SUCCESS_SHEET.SUCCESSFULY')}
          </>
        ) : (
          <>
            {t('SUCCESS_SHEET.TITLE_OFFLOADING')}{' '}
            <Typography fontWeight="bold">{orderNumber}</Typography>{' '}
            {t('SUCCESS_SHEET.SUCCESSFULY')}
          </>
        )}
      </Typography>
      <CustomButton
        data={{
          text: t('SUCCESS_SHEET.ACTION'),
        }}
        config={{
          customTextStyle: {
            color: Colors.Base.Primary.White,
          },
          customButtonStyle: styles.buttonStyle,
        }}
        eventHandlers={{onPress: handleSuccessModalButton}}
      />
    </>
  );
};
export default SuccessBottomSheet;
