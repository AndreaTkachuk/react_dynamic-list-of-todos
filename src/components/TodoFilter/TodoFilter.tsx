import React from 'react';

type Props = {
  handlerSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlerInput: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  query: string;
};

export const TodoFilter: React.FC<Props> = ({
  handlerSelect: handlerFilter,
  handlerInput: handlerInput,
  query,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select data-cy="statusSelect" onChange={handlerFilter}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={handlerInput}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      <span className="icon is-right" style={{ pointerEvents: 'all' }}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        {query && (
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => handlerInput('')}
          />
        )}
      </span>
    </p>
  </form>
);
