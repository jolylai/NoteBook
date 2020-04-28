import React, { useEffect } from 'react';
import ProTable, { ProColumns, ProTableProps } from '@ant-design/pro-table';
import { Modal, message } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { useDynamicList } from '@umijs/hooks';

interface TableProps<
  T extends {
    [key: string]: any;
  }
> extends Omit<ModalProps, 'onOk'> {
  columns: ProColumns<T>[];
  // todo
  request: () => any;
  rowKey: string;
  multiple?: boolean;
  onOk: (data: T[] | T) => void;
}

const defaultPagination = {
  showQuickJumper: true,
  showTotal: (total: number) => `共 ${total} 条`,
  current: 1,
  pageSize: 5,
};

const defaultModalProps = {
  title: '弹窗',
  width: 800,
};

const defaultTableProps: ProTableProps = {
  size: 'small',
  options: 'false',
  toolBarRender: false,
  search: {
    span: 8,
  },
  pagination: defaultPagination,
};

function Table<T>(props: TableProps<T>) {
  const {
    columns,
    request,
    rowKey = 'id',
    multiple = true,
    onOk,
    ...restProps
  } = props;

  const { list, push, remove, merge, resetList } = useDynamicList<T>([]);
  const selectedRowKeys = list.filter(Boolean).map(item => item[rowKey]);

  // 弹窗关闭时清空已选
  useEffect(() => {
    if (!props.visible) {
      resetList([]);
    }
  }, [props.visible]);

  const getIndex = (record: T) => {
    return list.findIndex(item => item[rowKey] === record[rowKey]);
  };

  // 单行选择
  const handleSelect = (record: any, selected: boolean) => {
    if (multiple) {
      if (selected) {
        push(record);
      } else {
        const index = getIndex(record);
        remove(index);
      }
    } else {
      resetList([record]);
    }
  };

  // 全选
  const handleSelectAll = (
    selected: boolean,
    selectedRows: T[],
    changeRows: T[],
  ) => {
    if (!row[rowKey]) {
      return;
    }
    if (selected) {
      // changeRows antd 存在bug
      changeRows = changeRows.filter(
        row => !selectedRowKeys.includes(row[rowKey]),
      );

      merge(list.length, changeRows);
    } else {
      // changeRows antd 存在bug
      changeRows = changeRows.filter(row =>
        selectedRowKeys.includes(row[rowKey]),
      );

      const removekeys = changeRows.map(row => row[rowKey]);
      const restList = list.filter(item => !removekeys.includes(item[rowKey]));
      resetList(restList);
    }
  };

  const handleOk = () => {
    if (!list.length) {
      message.warning('请选择数据');
      return;
    }
    if (typeof onOk !== 'function') {
      return;
    }
    if (multiple) {
      onOk(list);
    } else {
      onOk(list[0]);
    }
    resetList([]);
  };

  return (
    <Modal {...defaultModalProps} {...restProps} onOk={handleOk}>
      <ProTable<T>
        rowKey={rowKey}
        {...defaultTableProps}
        columns={columns}
        request={request}
        rowSelection={{
          type: multiple ? 'checkbox' : 'radio',
          selectedRowKeys: selectedRowKeys,
          onSelect: handleSelect,
          onSelectAll: handleSelectAll,
        }}
        tableAlertRender={() => `当前共选中${list.length} 项`}
        tableAlertOptionRender={() => [
          <a key={1} onClick={() => resetList([])}>
            清空
          </a>,
        ]}
      />
    </Modal>
  );
}

export default Table;
