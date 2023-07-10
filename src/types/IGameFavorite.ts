import { IGame } from "./IGame"

export interface IGameFavorite extends IGame {
	stars: number
	isFavorite: boolean
}

