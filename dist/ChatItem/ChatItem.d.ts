import React from 'react';
import { AvatarProps } from '../Avatar/Avatar';
import './ChatItem.css';
export declare type ChatItemProps = {
    className?: string;
    letterItem?: AvatarProps['letterItem'];
    avatar?: AvatarProps['src'];
    avatarFlexible?: boolean;
    alt?: AvatarProps['alt'];
    title?: string;
    subtitle?: string;
    date?: Date | number;
    dateString?: string;
    unread?: number;
    onClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onContextMenu?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    onAvatarError?: AvatarProps['onError'];
    statusColor?: string;
    statusColorType?: 'badge' | 'encircle';
    statusText?: string;
    /** lazy loading image path */
    lazyLoadingImage?: AvatarProps['lazyLoadingImage'];
};
export declare const ChatItem: React.FC<ChatItemProps>;
export default ChatItem;
