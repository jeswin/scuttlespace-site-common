import { ILinks } from "scuttlespace-service-cms";
import { IDateLinks, IFeed, IPinned } from "scuttlespace-service-feed";
import { ITemplateResult } from ".";

export interface IUserModuleHomeArgs {
  blogroll: ILinks;
  dateLinks: IDateLinks;
  feed: IFeed;
  pinned: IPinned;
}

export interface IUserModule {
  home: (args: IUserModuleHomeArgs) => Promise<ITemplateResult>;
}
