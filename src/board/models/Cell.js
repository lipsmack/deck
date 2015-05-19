import { List, Record } from "immutable";

export const types = {
    COMMUNITY: 0,
    DISCARD: 1,
    DRAW: 2,
    EMPTY: 3,
    HAND: 4
};

export default Record({
    /**
     * The type of the cell dictates what cards may
     * be played on it and how players can interact
     * with it. The following types are supported:
     *
     * COMMUNITY - cards available to all players
     * DISCARD - cards discarded from hand or after turn
     * DRAW - cards that can be drawn into hand
     * EMPTY - no card may be played
     * HAND - cards available to play next turn
     *
     * @type {Number}
     */
    type: types.EMPTY,

    /**
     * One or more cards played on this cell.
     *
     * @type {!List<Card>}
     */
    cards: List()
});
