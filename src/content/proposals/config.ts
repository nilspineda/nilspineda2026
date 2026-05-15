import { defineCollection, z } from "astro:content";

const ProblemaSchema = z.object({
  titulo: z.string(),
  descripcion: z.string(),
});

const OportunidadSchema = z.object({
  titulo: z.string(),
  descripcion: z.string(),
});

const SolucionSchema = z.object({
  nombre: z.string(),
  descripcion: z.string(),
  icono: z.string(),
});

const BeneficioSchema = z.object({
  nombre: z.string(),
  valor: z.string(),
  descripcion: z.string(),
});

const PlanSchema = z.object({
  nombre: z.string(),
  precio: z.string(),
  precioInfo: z.string(),
  destacado: z.boolean(),
  incluye: z.array(z.string()),
});

const TimelineSchema = z.object({
  semana: z.number(),
  titulo: z.string(),
  descripcion: z.string(),
});

const ProposalCollection = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    cliente: z.string(),
    logo: z.string().optional(),
    titulo: z.string(),
    subtitulo: z.string(),
    heroImage: z.string().optional(),
    colorAccent: z.string().default("#8B5CF6"),
    whatsapp: z.string().default("573167195500"),
    email: z.string().default("hola@nilspineda.com"),
    fecha: z.string(),
    propuesta: z.object({
      problema: z.array(ProblemaSchema),
      oportunidad: z.array(OportunidadSchema),
      soluciones: z.array(SolucionSchema),
      beneficios: z.array(BeneficioSchema),
      planes: z.array(PlanSchema),
      timeline: z.array(TimelineSchema),
    }),
  }),
});

export const collections = {
  proposals: ProposalCollection,
};