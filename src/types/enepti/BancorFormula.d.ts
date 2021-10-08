/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";

interface BancorFormulaInterface extends ethers.utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "calculateCrossConnectorReturn(uint256,uint32,uint256,uint32,uint256)": FunctionFragment;
    "calculateCrossReserveReturn(uint256,uint32,uint256,uint32,uint256)": FunctionFragment;
    "calculateFundCost(uint256,uint256,uint32,uint256)": FunctionFragment;
    "calculateLiquidateReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
    "calculatePurchaseReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
    "calculateSaleReturn(uint256,uint256,uint32,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateCrossConnectorReturn",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateCrossReserveReturn",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateFundCost",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateLiquidateReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePurchaseReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSaleReturn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateCrossConnectorReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateCrossReserveReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateFundCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateLiquidateReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePurchaseReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSaleReturn",
    data: BytesLike
  ): Result;

  events: {};
}

export class BancorFormula extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BancorFormulaInterface;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[number]>;

    calculateCrossConnectorReturn(
      _fromConnectorBalance: BigNumberish,
      _fromConnectorWeight: BigNumberish,
      _toConnectorBalance: BigNumberish,
      _toConnectorWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateCrossReserveReturn(
      _fromReserveBalance: BigNumberish,
      _fromReserveRatio: BigNumberish,
      _toReserveBalance: BigNumberish,
      _toReserveRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateFundCost(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateLiquidateReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  VERSION(overrides?: CallOverrides): Promise<number>;

  calculateCrossConnectorReturn(
    _fromConnectorBalance: BigNumberish,
    _fromConnectorWeight: BigNumberish,
    _toConnectorBalance: BigNumberish,
    _toConnectorWeight: BigNumberish,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateCrossReserveReturn(
    _fromReserveBalance: BigNumberish,
    _fromReserveRatio: BigNumberish,
    _toReserveBalance: BigNumberish,
    _toReserveRatio: BigNumberish,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateFundCost(
    _supply: BigNumberish,
    _reserveBalance: BigNumberish,
    _totalRatio: BigNumberish,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateLiquidateReturn(
    _supply: BigNumberish,
    _reserveBalance: BigNumberish,
    _totalRatio: BigNumberish,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculatePurchaseReturn(
    _supply: BigNumberish,
    _reserveBalance: BigNumberish,
    _reserveRatio: BigNumberish,
    _depositAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSaleReturn(
    _supply: BigNumberish,
    _reserveBalance: BigNumberish,
    _reserveRatio: BigNumberish,
    _sellAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<number>;

    calculateCrossConnectorReturn(
      _fromConnectorBalance: BigNumberish,
      _fromConnectorWeight: BigNumberish,
      _toConnectorBalance: BigNumberish,
      _toConnectorWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateCrossReserveReturn(
      _fromReserveBalance: BigNumberish,
      _fromReserveRatio: BigNumberish,
      _toReserveBalance: BigNumberish,
      _toReserveRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFundCost(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateLiquidateReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    calculateCrossConnectorReturn(
      _fromConnectorBalance: BigNumberish,
      _fromConnectorWeight: BigNumberish,
      _toConnectorBalance: BigNumberish,
      _toConnectorWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateCrossReserveReturn(
      _fromReserveBalance: BigNumberish,
      _fromReserveRatio: BigNumberish,
      _toReserveBalance: BigNumberish,
      _toReserveRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFundCost(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateLiquidateReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateCrossConnectorReturn(
      _fromConnectorBalance: BigNumberish,
      _fromConnectorWeight: BigNumberish,
      _toConnectorBalance: BigNumberish,
      _toConnectorWeight: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateCrossReserveReturn(
      _fromReserveBalance: BigNumberish,
      _fromReserveRatio: BigNumberish,
      _toReserveBalance: BigNumberish,
      _toReserveRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateFundCost(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateLiquidateReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _totalRatio: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculatePurchaseReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSaleReturn(
      _supply: BigNumberish,
      _reserveBalance: BigNumberish,
      _reserveRatio: BigNumberish,
      _sellAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}