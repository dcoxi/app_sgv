using System;
using app_sgv.Models.Enums;

namespace app_sgv.Models;

public class PessoaModel : Base
{
	public required string Nome { get; set; }
	public required string SobreNome { get; set; }
	public required string Telefone { get; set; }
	public required string Email { get; set; }
	public required Genero Genero { get; set; }
	public required EstadoCivil EstadoCivil { get; set; }
	public DateTime DataRegisto { get; } = DateTime.Now;

	public ICollection<UsuarioModel>? UsuariosModel { get; set; }

}

