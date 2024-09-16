import { RiDeleteBinLine } from 'react-icons/ri';
import { GridItem, Text } from '..';
import style from './TodoListItem.module.css';

export const TodoListItem = () => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #1
        </Text>
        <Text>Some description</Text>
        <button className={style.deleteButton} type="button">
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </GridItem>
  );
};
