using System;
using app_sgv.Models.Enums;

namespace app_sgv.Models
{
	public class UsuarioModel : PessoaModel 
	{
		
		public required string Senha { get; set; }
		public required Perfil Perfil { get; set; }

	}
}

