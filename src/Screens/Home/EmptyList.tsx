import React from 'react';
import {View} from 'react-native';
import SVGIcon from '@shared/Components/SVGIcon';
import Typography from '@shared/Components/Typography';
import VerticalSpace from '@shared/Components/VerticalSpace';
import styles from './styles';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import {IEmptyList} from './types';

const EmptyList = ({type}: IEmptyList) => {
  const {t} = UseTranslationHook();
  const TYPES = {
    LIST: {
      iconName: 'truck',
      iconSize: 38,
      title: t('EMPTY_SCREEN.LIST_TITLE'),
      description: t('EMPTY_SCREEN.LIST_DESC'),
      testId: 'emptyScreen_txt',
    },
    RECEIVALS: {
      iconName: 'todo',
      iconSize: 38,
      title: '',
      description: t('EMPTY_SCREEN.RECEIVALS_DESC'),
      testId: 'listing_emptyOrdersToReceive_txt',
    },
    DELIVERIES: {
      iconName: 'boxes',
      iconSize: 38,
      title: '',
      description: t('EMPTY_SCREEN.DELIVERIES_DESC'),
      testId: 'listing_emptyOrdersToDeliver_txt',
    },
  };

  return (
    <View style={styles.emptyContainer} testID={TYPES[type]?.testId}>
      <VerticalSpace height={8} />
      <SVGIcon
        data={{
          iconName: TYPES[type]?.iconName,
          iconSize: TYPES[type]?.iconSize,
        }}
      />
      <Typography variant="body" fontWeight="bold">
        {TYPES[type]?.title}
      </Typography>
      <VerticalSpace height={2} />
      <Typography variant="body" style={styles.descriptionText}>
        {TYPES[type]?.description}
      </Typography>
      <VerticalSpace height={8} />
    </View>
  );
};

export default EmptyList;
