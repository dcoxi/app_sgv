using System;
namespace app_sgv.Models;

public class MenuModel : Base
{
	public required string Designacao { get; set; }
	public required string Icon { get; set; }

	public Uri? Url { get; set; }

	public ICollection<SubMenuModel>? SubMenus { get; set; }
}

