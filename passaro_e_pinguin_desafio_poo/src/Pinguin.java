public class Pinguin extends Passaro {
    @Override
    public void voar() {
        System.out.println("Infelizmente, eu nao sei voar! :(");
        throw new UnsupportedOperationException();
    }
}
