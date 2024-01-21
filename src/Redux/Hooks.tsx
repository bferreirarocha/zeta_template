import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState,AppDispatch } from './ReduxStore'


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector