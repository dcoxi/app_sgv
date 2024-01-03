using System;
namespace app_sgv.Models;

public class SubMenuModel : Base
{
	public SubMenuModel()
	{
	}

	public required MenuModel Menu { get; set; }
	public required string Designacao { get; set; }
	public required string Icon { get; set; }
	public required Uri Url { get; set; }

}

