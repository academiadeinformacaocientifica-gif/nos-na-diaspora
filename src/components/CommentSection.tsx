import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, MessageSquare, Send, User } from 'lucide-react';
import { toast } from 'sonner';

interface Comment {
    id: string;
    author_name: string;
    content: string;
    created_at: string;
}

interface CommentSectionProps {
    newsId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ newsId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        content: ''
    });

    const fetchComments = async () => {
        try {
            const { data, error } = await supabase
                .from('comments')
                .select('*')
                .eq('news_id', newsId)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setComments(data || []);
        } catch (error: any) {
            console.error('Error fetching comments:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [newsId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.content) {
            toast.error('Por favor, preencha o seu nome e o comentário');
            return;
        }

        setIsSubmitting(true);
        try {
            const { error } = await supabase
                .from('comments')
                .insert([{
                    news_id: newsId,
                    author_name: formData.name,
                    content: formData.content
                }]);

            if (error) throw error;

            setFormData({ name: '', content: '' });
            await fetchComments();
            toast.success('Comentário enviado com sucesso!');
        } catch (error: any) {
            console.error('Error adding comment:', error.message);
            toast.error('Erro ao enviar comentário: ' + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Comentários ({comments.length})</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h4 className="font-semibold mb-4">Deixe a sua opinião</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Nome</label>
                            <Input
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Comentário</label>
                        <Textarea
                            placeholder="Escreva o seu comentário..."
                            className="resize-none min-h-[100px]"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="gap-2">
                        {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                        Enviar Comentário
                    </Button>
                </form>
            </div>

            <div className="space-y-6">
                {loading ? (
                    <div className="flex justify-center py-8">
                        <Loader2 className="animate-spin text-primary" size={32} />
                    </div>
                ) : comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <User size={20} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h5 className="font-bold">{comment.author_name}</h5>
                                    <span className="text-xs text-muted-foreground">
                                        {new Date(comment.created_at).toLocaleDateString('pt-PT')}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground py-8 italic">
                        Ainda não há comentários. Seja o primeiro a comentar!
                    </p>
                )}
            </div>
        </div>
    );
};

export default CommentSection;
