import React from 'react';
import SVGIcon from '../SVGIcon';
import VerticalSpace from '../VerticalSpace';
import Typography from '../Typography';
import Colors from '@shared/Theme/Colors';
import CustomButton from '../Buttons/CustomButton';
import styles from './styles';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';

interface IUnAssignSheetProps {
  onClose: () => void;
  unassignedOrderNames: string[];
}

const UnAssignBottomSheet = ({
  onClose,
  unassignedOrderNames,
}: IUnAssignSheetProps) => {
  const {t} = UseTranslationHook();
  return (
    <>
      <SVGIcon data={{iconName: 'warning', iconSize: 60}} />
      <VerticalSpace height={18} />
      <Typography variant="body" style={styles.modalText}>
        {t('UN_ASSIGN_SHEET.TITLE')}
      </Typography>
      {unassignedOrderNames.map((name, index) => (
        <Typography
          key={index}
          variant="body"
          style={styles.modalText}
          fontWeight="bold">
          {name}
        </Typography>
      ))}
      <Typography variant="body" style={styles.modalText}>
        {t('UN_ASSIGN_SHEET.DESC')}
      </Typography>
      <CustomButton
        data={{
          text: t('UN_ASSIGN_SHEET.ACTION'),
        }}
        config={{
          customTextStyle: {
            color: Colors.Base.Primary.White,
          },
          customButtonStyle: styles.buttonStyle,
        }}
        eventHandlers={{onPress: onClose}}
      />
    </>
  );
};
export default UnAssignBottomSheet;
