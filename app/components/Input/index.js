/**
 *
 * Input
 *
 */

import React from 'react';
import { Input as AntInput, Tooltip, Icon } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const { TextArea, Search } = AntInput;

function Input(props) {
    if (props.textArea) {
        return (
            <TextArea
                autoSize={props.autoSize}
                defaultValue={props.defaultValue}
                value={props.value}
                onPressEnter={props.onPressEnter}
                onChange={props.onChange}
                allowClear={props.allowClear}
                cols={props.cols}
                rows={props.rows}
                placeholder={props.placeholder}
            />
        );
    } else if (props.search) {
        return (
            <Search
                enterButton={props.enterButton}
                onSearch={props.onSearch}
                loading={props.loading}
                addonAfter={props.addonAfter}
                addonBefore={props.addonBefore}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                id={props.id}
                maxLength={props.maxLength}
                prefix={props.prefix}
                size={props.size}
                suffix={props.suffix}
                value={props.value}
                onChange={props.onChange}
                allowClear={props.allowClear}
                placeholder={props.placeholder}
            />
        );
    } else if (props.password) {
        return (
            <Input.Password
                addonAfter={props.addonAfter}
                addonBefore={props.addonBefore}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                id={props.id}
                maxLength={props.maxLength}
                prefix={props.prefix}
                size={props.size}
                suffix={props.suffix}
                value={props.value}
                onChange={props.onChange}
                onPressEnter={props.onPressEnter}
                allowClear={props.allowClear}
                visibilityToggle={props.visibilityToggle}
            />
        );
    } else {
        return (
            <Input
                addonAfter={props.addonAfter}
                addonBefore={props.addonBefore}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                id={props.id}
                maxLength={props.maxLength}
                prefix={props.prefix}
                size={props.size}
                suffix={props.suffix}
                value={props.value}
                onChange={props.onChange}
                onPressEnter={props.onPressEnter}
                allowClear={props.allowClear}
                placeholder={props.placeholder}
            />
        );
    }
}

Input.propTypes = {
    addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    maxLength: PropTypes.number,
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    size: PropTypes.string,
    suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onPressEnter: PropTypes.func,
    allowClear: PropTypes.bool,
    autoSize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    enterButton: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
    onSearch: PropTypes.func,
    loading: PropTypes.bool,
    visibilityToggle: PropTypes.bool,
};

export default Input;
