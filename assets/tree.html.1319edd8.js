import{_ as e,o as i,c as n,e as l}from"./app.7e335e28.js";const s="/assets/树形表示法.19f54a94.png",d="/assets/文氏图表示法.c038e164.png",r="/assets/凹入表示法.2fcecb18.png",a="/assets/括号表示法.230088e2.png",t="/assets/树形度数.a88f2a92.png",v="/assets/二叉树的基本形态.bfeacd93.jpg",c={},u=l(`<h1 id="数和二叉树" tabindex="-1"><a class="header-anchor" href="#数和二叉树" aria-hidden="true">#</a> 数和二叉树</h1><details class="custom-container details"><summary>参考代码</summary><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>#include &lt;iostream&gt;
using namespace std;

typedef int DataType;
const int RefValue = -1;
const int MaxSize = 100;

class BinTreeNode
{
private:
    /* data */
    friend class BinaryTree;
    DataType data;
    BinTreeNode *leftNote, *rightNote;
};

class BinaryTree
{
private:
    /* data */
    BinTreeNode *root;

public:
    BinaryTree() : root(NULL)
    {
    }
    ~BinaryTree()
    {
        destroy(root);
    }
    void createBinTree()
    {
        createBinTree(root);
    }
    void createBinTree(BinTreeNode *&amp;subTree)
    {
        DataType item;
        cout &lt;&lt; &quot;please enter value&quot; &lt;&lt; endl;
        cin &gt;&gt; item;
        if (item != RefValue) //-1
        {
            subTree = new BinTreeNode();
            if (subTree == NULL)
            {
                cout &lt;&lt; &quot;error&quot; &lt;&lt; endl;
                exit(1);
            }
            subTree-&gt;data = item;
            createBinTree(subTree-&gt;leftNote);
            createBinTree(subTree-&gt;rightNote);
        }
        else
            subTree = NULL;
    }
    void destroy(BinTreeNode *&amp;Tree)
    {
        if (Tree == NULL)
            return;
        destroy(Tree-&gt;leftNote);
        destroy(Tree-&gt;rightNote);
        delete Tree;
        Tree == NULL;
    }
    void preOrder()
    {
        preOrder(root);
    }
    void preOrder(BinTreeNode *subTree)
    {
        if (subTree != NULL)
        {
            cout &lt;&lt; subTree-&gt;data &lt;&lt; &quot; &quot;;
            preOrder(subTree-&gt;leftNote);
            preOrder(subTree-&gt;rightNote);
        }
    }
    void PrintTree()
    {
    }
};

int main()
{

    BinaryTree bt;
    bt.createBinTree();
    cout &lt;&lt; &quot;------递归的前序------&quot; &lt;&lt; endl;
    bt.preOrder();

    return 0;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="数的基本概念" tabindex="-1"><a class="header-anchor" href="#数的基本概念" aria-hidden="true">#</a> 数的基本概念</h2><h3 id="数的定义" tabindex="-1"><a class="header-anchor" href="#数的定义" aria-hidden="true">#</a> 数的定义</h3><ol><li>形式化定义</li></ol><p>数：T={D,R} 。D是包含n个节点的有穷集合（n≥0）。当n=0时为空树，否则关系R满足以下条件：</p><ul><li>有且仅有一个节点d0∈D，它对于关系R来说没有前驱节点，节点d0称作树的根节点。</li><li>除节点d0外，D中的每个节点对于关系R来说都有且仅有一个前驱节点。</li><li>D中每个节点对于关系R来说可以有零个或多个后继节点。</li></ul><ol><li>递归定义</li></ol><p>树是由n（n≥0）个节点组成的有限集合（记为T）。其中：</p><ul><li>如果n=0，它是一棵空树，这是树的特例；</li><li>如果n&gt;0，这n个节点中存在（有仅存在）一个节点作为树的根节点，简称为根节点（root），其余节点可分为m （m&gt;0）个互不相交的有限集T1,T2,…,Tm,其中每一棵子集本身又是一棵符合本定义的树，称为根root的子树。</li></ul><h3 id="树的表示" tabindex="-1"><a class="header-anchor" href="#树的表示" aria-hidden="true">#</a> 树的表示</h3><p>（1）树形表示法。这是树的最基本的表示，使用一棵倒置的树表示树结构，非常直观和形象。</p><p><img src="`+s+'" alt="Untitled"></p><p>（2）文氏图表示法。使用集合以及集合的包含关系描述树结构。下图就是树的文氏图表示法。</p><p><img src="'+d+'" alt="Untitled"></p><p>（3）凹入表示法。使用线段的伸缩描述树结构。下图是树的凹入表示法。</p><p><img src="'+r+'" alt="Untitled"></p><p>（4）括号表示法。将树的根节点写在括号的左边，除根节点之外的其余节点写在括号中并用逗号间隔来描述树结构。下图是树的括号表示法。</p><p><img src="'+a+'" alt="Untitled"></p><h3 id="树的基本术语" tabindex="-1"><a class="header-anchor" href="#树的基本术语" aria-hidden="true">#</a> 树的基本术语</h3><p><img src="'+t+'" alt="Untitled"></p><p><strong>1. 节点的度与书的度</strong></p><p>树中某个节点的子树的个数称为该节点的度。树中各节点的度的最大值称为树的度，通常将度为m的树称为m次树。</p><p><strong>2. 分支节点与叶节点</strong></p><p>度不为零的节点称为非终端节点,又叫分支节点。度为零的节点称为终端节点或叶节点。在分支节点中，每个节点的分支数就是该节点的度。如对于度为1的节点,其分支数为1，被称为单分支节点；对于度为2的节点，其分支数为2，被称为双分支节点，其余类推。</p><p><strong>3. 路径与路径长度</strong></p><p>对于任意两个节点di和dj，若树中存在一个节点序列di,di1,di2,…,din,dj，使得序列中除di外的任一节点都是其在序列中的前一个节点的后继，则称该节点序列为由di到dj的一条路径，用路径所通过的节点序列(di,di1,di2,…,dj)表示这条路径。</p><p>路径长度等于路径所通过的节点数目减1（即路径上分支数目）。</p><p><strong>4. 孩子节点、双亲节点和兄弟节点</strong></p><p>在一棵树中，每个节点的后继，被称作该节点的孩子节点（或子女节点）。相应地，该节点被称作孩子节点的双亲节点（或父母节点）。</p><p>具有同一双亲的孩子节点互为兄弟节点。进一步推广这些关系，可以把每个节点的所有子树中的节点称为该节点的子孙节点。</p><p>从树根节点到达该节点的路径上经过的所有节点被称作该节点的祖先节点。</p><p><strong>5. 节点的层次和树的高度</strong></p><p>树中的每个节点都处在一定的层次上。节点的层次从树根开始定义，根节点为第1层，它的孩子节点为第2层,以此类推,一个节点所在的层次为其双亲节点所在的层次加1。树中节点的最大层次称为树的高度（或树的深度）。</p><p><strong>1. 有序树和无序树</strong></p><p>若树中各节点的子树是按照一定的次序从左向右安排的，且相对次序是不能随意变换的，则称为有序树，否则称为无序树。</p><p><strong>7. 森林</strong></p><p>n（n＞0）个互不相交的树的集合称为森林。森林的概念与树的概念十分相近，因为只要把树的根节点删去就成了森林。反之，只要给n棵独立的树加上一个节点，并把这n棵树作为该节点的子树，则森林就变成了树。</p><h3 id="树的性质" tabindex="-1"><a class="header-anchor" href="#树的性质" aria-hidden="true">#</a> 树的性质</h3><ul><li>树中的节点数等于所有节点的度数加1。</li></ul><blockquote><p>证明：根据树的定义，在一棵树中，除树根节点外，每个节点有且仅有一个前驱节点。也就是说，每个节点与指向它的一个分支一一对应，所以除树根之外的节点数等于所有节点的分支数（度数），从而可得树中的节点数等于所有节点的度数加1。</p></blockquote><blockquote><p>求解树的节点个数问题：一棵度为3的树,其中度为1、2、3的节点个数分别是2个、1个、2个;计算叶子节点的个数？</p><p>解：假设该三次树中度为0、1、2、3的节点个数分别为n0个、n1个、n2个、n3个,节点总数为n个,分支总数为e,由树的性质可知: n=e+1 ∵n=n0+n1+n2+n3=n0+2+1+2=n0+5 ∵e=0<em>n0+1</em>n1+2<em>n2+3</em>n3=1<em>2+2</em>1+3*2=10 则n0+5=10+1 ∴n0=6</p></blockquote><h2 id="二叉树的概念和性质" tabindex="-1"><a class="header-anchor" href="#二叉树的概念和性质" aria-hidden="true">#</a> 二叉树的概念和性质</h2><h3 id="二叉树的概念" tabindex="-1"><a class="header-anchor" href="#二叉树的概念" aria-hidden="true">#</a> 二叉树的概念</h3><p><strong>二叉树是有限的节点集合</strong>。</p><ul><li>这个集合或者是空。</li><li>或者由一个根节点和两棵互不相交的称为左子树和右子树的二叉树组成。</li></ul><blockquote><p>二叉树的子树不仅是有序的，还要分左右。</p></blockquote><p><strong>二叉树的五种基本形态</strong></p><p><img src="'+v+'" alt="二叉树的基本形态"></p><p><strong>满二叉树</strong></p><p>在一棵二叉树中,如果所有分支节点都有左孩子节点和右孩子节点，并且叶节点都集中在二叉树的最下一层。</p><p><strong>完全二叉树</strong></p><p>若二叉树中最多只有最下面两层的节点的度数可以小于2，并且最下面一层的叶节点都依次排列在该层最左边的位置上。</p><h3 id="二叉树性质" tabindex="-1"><a class="header-anchor" href="#二叉树性质" aria-hidden="true">#</a> 二叉树性质</h3><ul><li>非空二叉树上叶节点数等于双分支节点数加1。</li></ul><blockquote><p><strong>证明</strong></p><p>设二叉树上叶节点数为n0，单分支节点数为n1，双分支节点数为n2，则总节点数n=n0+n1+n2。在一棵二叉树中，所有节点的分支数（即度数）应等于单分支节点数加上双分支节点数的2倍，即总的分支数=1*n1+2*n2。</p><p>由于二叉树中除根节点以外，每个节点都有唯一的一个分支指向它，因此二叉树中有：总的分支数=总节点数-1。</p><p>由上述三个等式可得：n1+2n2=n0+n1+n2-1</p><p>即：n0=n2+1</p></blockquote><ul><li><p>非空二叉树上第i层上至多有2^i-1个节点，这里应有i≥1。</p></li><li><p>高度为h的二叉树至多有2h-1个节点（h≥1）。</p></li><li><p>对完全二叉树中编号为i的节点（1≤i≤n，n≥1，n为节点数）有：</p></li></ul><p>1）若i≤|n/2|，即2i≤n，则编号为i的节点为分支节点，否则为叶子节点。</p><p>2）若n为奇数，则每个分支节点都既有左孩子节点，也有右孩子节点,不存在度为1的结点，即n1=0；若n为偶数，则编号最大的分支节点只有左孩子节点，没有右孩子节点，存在一个度为1的节点，即n1=1.</p><p>(3)若编号为i的节点有左孩子节点，则左孩子节点的编号为2i；若编号为i的节点有右孩子节点，则右孩子节点的编号为(2i+1)。</p><p>(4)除树根节点外,若一个节点的编号为i，则它的双亲节点的编号为i/2。</p><ul><li>具有n个（n＞0）节点的完全二叉树的高度为[log2n+1]或[log2n]+1。</li></ul><h3 id="二叉树的存储结构" tabindex="-1"><a class="header-anchor" href="#二叉树的存储结构" aria-hidden="true">#</a> 二叉树的存储结构</h3><p><strong>二叉树的顺序存储</strong></p><ul><li><p>采用顺序存储结构，实际要求对非线性的结构线性化； 树是一个层次结构</p></li><li><p>二叉树是有序树</p></li><li><p>整个二叉树可以按照从上到下，从左到右的顺序排序，做标号；</p></li><li><p>对于满/完全二叉树，可以从根结点开始按序号存放</p></li><li><p>对于一般的二叉树，可以参照满二叉树的编码方法进行编码，位置空的结点空置。</p></li></ul>',65),p=[u];function o(m,b){return i(),n("div",null,p)}const g=e(c,[["render",o],["__file","tree.html.vue"]]);export{g as default};
