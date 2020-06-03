import React from 'react';
import moment from 'moment';

const SubHeader = (props: { date: number }) => <span>{moment(props.date).format('ddd, h:mA')}</span>;

export default SubHeader;
