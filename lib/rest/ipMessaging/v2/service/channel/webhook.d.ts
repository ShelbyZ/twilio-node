/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type WebhookMethod = 'GET'|'POST';

type WebhookType = 'webhook'|'trigger'|'studio';

/**
 * Initialize the WebhookList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 * @param channelSid - The SID of the Channel the ChannelWebhook resource belongs to
 */
declare function WebhookList(version: V2, serviceSid: string, channelSid: string): WebhookListInstance;

/**
 * Options to pass to update
 *
 * @property configuration.filters - The events that cause us to call the Channel Webhook
 * @property configuration.flowSid - The SID of the Studio Flow to call when an event occurs
 * @property configuration.method - The HTTP method used to call `configuration.url`
 * @property configuration.retryCount - The number of times to retry the webhook if the first attempt fails
 * @property configuration.triggers - A string that will cause us to call the webhook when it is found in a message body
 * @property configuration.url - The URL of the webhook to call
 */
interface WebhookInstanceUpdateOptions {
  configuration?: {
    url?: string;
    method?: WebhookMethod;
    filters?: string[];
    triggers?: string[];
    flowSid?: string;
    retryCount?: number;
  };
}

interface WebhookListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WebhookContext;
  /**
   * create a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WebhookListInstanceCreateOptions, callback?: (error: Error | null, item: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * Streams WebhookInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: WebhookListInstanceEachOptions, callback?: (item: WebhookInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a webhook
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): WebhookContext;
  /**
   * Retrieve a single target page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WebhookListInstanceOptions, callback?: (error: Error | null, items: WebhookInstance[]) => any): Promise<WebhookInstance[]>;
  /**
   * Retrieve a single page of WebhookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WebhookListInstancePageOptions, callback?: (error: Error | null, items: WebhookPage) => any): Promise<WebhookPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property configuration.filters - The events that cause us to call the Channel Webhook
 * @property configuration.flowSid - The SID of the Studio Flow to call when an event occurs
 * @property configuration.method - The HTTP method used to call `configuration.url`
 * @property configuration.retryCount - The number of times to retry the webhook if the first attempt fails
 * @property configuration.triggers - A string that will cause us to call the webhook when it is found in a message body
 * @property configuration.url - The URL of the webhook to call
 * @property type - The type of webhook
 */
interface WebhookListInstanceCreateOptions {
  configuration?: {
    url?: string;
    method?: WebhookMethod;
    filters?: string[];
    triggers?: string[];
    flowSid?: string;
    retryCount?: number;
  };
  type: WebhookType;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface WebhookListInstanceEachOptions {
  callback?: (item: WebhookInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface WebhookListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface WebhookListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface WebhookPayload extends WebhookResource, Page.TwilioResponsePayload {
}

interface WebhookResource {
  account_sid: string;
  channel_sid: string;
  configuration: string;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  sid: string;
  type: string;
  url: string;
}

interface WebhookSolution {
  channelSid?: string;
  serviceSid?: string;
}


declare class WebhookContext {
  /**
   * Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the resource from
   * @param channelSid - The SID of the Channel the resource to fetch belongs to
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, serviceSid: string, channelSid: string, sid: string);

  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * remove a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WebhookInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
}


declare class WebhookInstance extends SerializableClass {
  /**
   * Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param channelSid - The SID of the Channel the ChannelWebhook resource belongs to
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, payload: WebhookPayload, serviceSid: string, channelSid: string, sid: string);

  private _proxy: WebhookContext;
  accountSid: string;
  channelSid: string;
  configuration: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): void;
  /**
   * remove a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WebhookInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: string;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): void;
  url: string;
}


declare class WebhookPage extends Page<V2, WebhookPayload, WebhookResource, WebhookInstance> {
  /**
   * Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: WebhookSolution);

  /**
   * Build an instance of WebhookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebhookPayload): WebhookInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WebhookContext, WebhookInstance, WebhookList, WebhookListInstance, WebhookListInstanceCreateOptions, WebhookListInstanceEachOptions, WebhookListInstanceOptions, WebhookListInstancePageOptions, WebhookPage, WebhookPayload, WebhookResource, WebhookSolution }
