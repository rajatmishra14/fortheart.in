import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const commentFormSchema = z.object({
  text: z.string().min(1, "Please enter your comment"),
  author: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
});

type CommentFormValues = z.infer<typeof commentFormSchema>;

interface CommentFormProps {
  postId: string;
  onSubmit: (values: CommentFormValues) => Promise<void>;
  isSubmitting?: boolean;
}

export default function CommentForm({ postId, onSubmit, isSubmitting = false }: CommentFormProps) {
  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      text: "",
      author: "",
      email: "",
    },
  });

  const handleSubmit = async (values: CommentFormValues) => {
    await onSubmit(values);
    form.reset();
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-8" data-testid="heading-leave-comment">
        Leave Your Comment
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal" data-testid="label-comment">Leave your comment</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your Comment"
                    className="min-h-[200px] resize-none text-base"
                    data-testid="textarea-comment"
                    {...field}
                  />
                </FormControl>
                <FormMessage data-testid="error-comment" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal" data-testid="label-name">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    className="text-base"
                    data-testid="input-name"
                    {...field}
                  />
                </FormControl>
                <FormMessage data-testid="error-name" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal" data-testid="label-email">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="text-base"
                    data-testid="input-email"
                    {...field}
                  />
                </FormControl>
                <FormMessage data-testid="error-email" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6"
            data-testid="button-submit-comment"
          >
            {isSubmitting ? "Submitting..." : "Submit Comment"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
